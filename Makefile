test-lambda:
	aws lambda invoke --function-name mybmi --cli-binary-format raw-in-base64-out --payload file://local/event1.json output.txt --output text --profile ruyoutor

test-api:
	curl 'https://9z87g313ci.execute-api.us-east-1.amazonaws.com/prod/mybmi?weight=66&height=166' -H 'content-type: application/json'	