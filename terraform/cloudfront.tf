resource "aws_cloudfront_distribution" "s3_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
  aliases             = ["${module.ui_deploy.host_name}"]
  http_version        = "http2"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.ssl_cert.arn}"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  origin {
    domain_name = "${module.ui_deploy.s3_bucket_url}"
    origin_id   = "${var.service_name}_UIOrigin"
    custom_origin_config {
      http_port = "80"
      https_port = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1.1", "TLSv1.2"]
    }
  }

  origin {
    domain_name = "${local.is_production ? "" : format("%s-", var.stage)}api.gif.cbfx.net"
    origin_id = "${var.service_name}_GIPHY_PROXY_APIOrigin"
    custom_origin_config {
      http_port = "80"
      https_port = "443"
      origin_protocol_policy = "match-viewer"
      origin_ssl_protocols = ["TLSv1.1", "TLSv1.2"]
    }
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    target_origin_id = "${var.service_name}_UIOrigin"
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
    cached_methods = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 31536000
    default_ttl = 31536000
    max_ttl = 31536000
  }

  cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "${var.service_name}_UIOrigin"
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
      headers = [
        "authorization"
      ]
    }
    cached_methods = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 0
    max_ttl = 0
    path_pattern = "index.html"
  }

  cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    target_origin_id = "${var.service_name}_GIPHY_PROXY_APIOrigin"
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
      headers = [
        "authorization"
      ]
    }
    cached_methods = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 0
    max_ttl = 0
    path_pattern = "/giphy*"
  }
}
