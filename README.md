aws cognito-idp admin-initiate-auth --region us-east-1 --cli-input-json file://auth.json

serverless deploy -f app
