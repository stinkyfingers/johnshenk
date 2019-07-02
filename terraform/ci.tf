resource "aws_iam_role" "johnshenk_build" {
  name = "johnshenk_build"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}
resource "aws_iam_role_policy" "johnshenk_build" {
  role = "${aws_iam_role.johnshenk_build.name}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ec2:CreateNetworkInterface",
        "ec2:DescribeDhcpOptions",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeSubnets",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeVpcs"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "${aws_s3_bucket.john-shenk.arn}",
        "${aws_s3_bucket.john-shenk.arn}/*"
      ]
    }
  ]
}
POLICY
}

resource "aws_codebuild_project" "johnshenk" {
  name          = "johnshenk"
  description   = "johnshenk"
  build_timeout = "5"
  service_role  = "${aws_iam_role.johnshenk_build.arn}"

  artifacts {
    type = "NO_ARTIFACTS"
  }

  cache {
    type     = "S3"
    location = "${aws_s3_bucket.john-shenk.bucket}"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:2.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"

    # environment variables go here
  }

  source {
    type            = "GITHUB"
    location        = "https://github.com/stinkyfingers/johnshenk.git"
    git_clone_depth = 1
    buildspec       = "buildspec.yml"
  }

  tags = {
    "Environment" = "Prod"
  }
}

resource "aws_codebuild_webhook" "johnshenk" {
  project_name = "${aws_codebuild_project.johnshenk.name}"
}
