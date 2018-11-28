# choosy-moms-ui

A simple UI with some simple features. This UI has HTTP mock calls built it
that mimic the APIs it consumes. You are able to run this locally with no
internet connection.

## Pre-installation

This UI requires a few dependencies that are not installed via `npm install`.

- "node": "10.8.0"
- "npm": "6.2.0"
- "terraform": "0.11.10"

Additionally, in order to properly run terraform and provision any infrastructure,
you'll certainly want to ensure you have at least the default credentials in your
aws credentials file. If you aren't familiar with the aws cli, [this](https://aws.amazon.com/cli/)
may help.

The method of installation is up to you. There may be a few more that I can't recall.

## Installation

Running the app locally will start up a webpack webserver at http://127.0.0.1:1337

```
git clone https://github.com/cbfx/choosy-moms-ui
npm install
npm start
```

## Testing

- `npm run lint`
- `npm run testOnce`
- `npm run e2e`

## Infrastructure and deployment

This UI utilizes an external module that deploys a series of resources in AWS
which allow the UI asset files, once minified, to be placed into an S3 bucket
behind a CloudFront distribution. This distribution can configure origins with
cache behaviors that allow for proxy behavior.

See the terraform variables file for more info on running Terraform.

Here's an example:
```
terraform workspace [select|new] cbfx

terraform plan -var "stage=cbfx" \
  -var "dist_path=~/dist" \
  -var "service_name=choosy-moms-ui" \
  -var "bucket_name=choosy-moms-ui-cbfx" \
  -out=tf.tfplan

terraform apply tf.tfplan
```

### Stages

#### Pull requests
https://cbfx.gif.cbfx.net

#### Master merge
https://staging.gif.cbfx.net

#### Semantic version bump
https://gif.cbfx.net

* As a side note: This infrastructure is heavily tied to a deployment domain
that you, as a friendly user, will certainly not have as a hosted zone in your
aws account. Ensure that you go through the .circleci/config.yml file to replace
existing references.

## Versioning

CircleCI is listening to any semantic version tags on the repo. There is a
script in this repo that will be run after any `npm` semantic version update.
This script will commit the change to the repo, format a nice commit message,
and then finally push the new tag into Github.

- `npm version patch`
- `npm version minor`
- `npm version major`
- etc
