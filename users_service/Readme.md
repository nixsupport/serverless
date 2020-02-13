aws configure=> configure aws locally

create

claudia create --region us-east-1 --api-module app

update

claudia update => update code

aws cognito-idp admin-initiate-auth --region us-east-1 --cli-input-json file://auth.json
