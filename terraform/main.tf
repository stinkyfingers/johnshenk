# vars
variable "region" {
  type = "string"
  default = "us-west-1"
}

# provider
provider "aws" {
  profile = "jds"
  region     = "${var.region}"
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
    domain_name = "${aws_s3_bucket.john-shenk.website_endpoint}"
    origin_id   = "${local.s3_origin_id}"

    custom_origin_config {
      http_port = "80"
      https_port= "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
    custom_header = {
      name = "Referer"
      value = "iWantYourResume"
    }
  }

  enabled             = true
  is_ipv6_enabled     = false

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${local.s3_origin_id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
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
  acl = "public-read"
  website {
   index_document = "index.html"
   error_document = "index.html"
 }
  policy = <<EOF
{
"Version":"2012-10-17",
"Statement":[
  {
    "Sid":"PublicReadForGetBucketObjects",
    "Effect":"Allow",
    "Principal":"*",
    "Action":"s3:GetObject",
    "Resource":"arn:aws:s3:::john-shenk.com/*"
  }]
}
EOF
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
