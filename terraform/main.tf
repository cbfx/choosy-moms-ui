terraform {
  backend "s3" {
    encrypt = true
    bucket = "terraform-state-bucket-choosy-moms-ui"
    key = "states/choosy-moms-ui.tfstate"
    dynamodb_table = "terraform-lock"
    region = "us-west-2"
  }
}

provider "template" {
  version = "~> 1.0"
}

provider "aws" {
  region = "${var.aws_region}"
  version = "~> 1.24"
  max_retries = 5
  allowed_account_ids = ["575020237982"]
}
