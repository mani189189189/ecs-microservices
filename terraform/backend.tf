terraform {
  backend "s3" {
    bucket         = "ecs-buckettfstore"
    key            = "ecs/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
  }
}
