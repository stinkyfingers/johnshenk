terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"  # Adjust the version as necessary
    }
  }
  required_version = ">= 1.0.0"
}

# vars
variable "region" {
  type = string
  default = "us-west-1"
}

# provider
provider "aws" {
  profile = "jds"
  region     = var.region
}

# cloudfront
locals {
  s3_origin_id = "john-shenk-origin"
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "john-shenk.com identity"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  aliases = ["john-shenk.com"]
  origin {
    domain_name = aws_s3_bucket.john-shenk.bucket_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = false
  default_root_object = "index.html"
  custom_error_response {
    error_code = 403
    response_code = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA"]
    }
  }

  tags = {
    Environment = "production"
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:671958020402:certificate/87283675-eede-49c0-b322-4f0315c87441"
    ssl_support_method = "sni-only"
  }
}

# bucket
resource "aws_s3_bucket" "john-shenk" {
  bucket = "john-shenk.com"
#  acl = "private"
#  policy = <<EOF
#{
#    "Version": "2012-10-17",
#    "Statement": [
#        {
#            "Sid": "Cloudfront Read",
#            "Effect": "Allow",
#            "Principal": {
#                "AWS": "${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"
#            },
#            "Action": "s3:GetObject",
#            "Resource": "arn:aws:s3:::john-shenk.com/*"
#        }
#    ]
#}
#EOF
}

resource aws_s3_bucket_policy john-shenk {
  bucket = aws_s3_bucket.john-shenk.bucket
  policy = data.aws_iam_policy_document.s3_bucket_policy.json
}

data "aws_iam_policy_document" "s3_bucket_policy" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.john-shenk.arn}/*"]
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

# backend
terraform {
  backend "s3" {
    bucket = "remotebackend"
    key    = "john-shenk/terraform.tfstate"
    region = "us-west-1"
    profile = "jds"
  }
}

data "terraform_remote_state" "john-shenk" {
  backend = "s3"
  config = {
    bucket  = "remotebackend"
    key     = "john-shenk/terraform.tfstate"
    region  = "us-west-1"
    profile = "jds"
  }
}
