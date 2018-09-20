import boto3
import uuid
import os
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['DB_TABLE_NAME'])

def lambda_handler(event, context):
    #Creating new record in DynamoDB table
    recordId = str(uuid.uuid4())
    event["id"] = recordId
    table.put_item(Item=event)
    
    #Sending notification about new quote to SNS
    client = boto3.client('sns')
    strMessage = "Name: " + event["firstName"] + ' ' + event["lastName"] + "\n" + "Phone: " + event["phoneNumber"] + "\n" + "Email: " + event["email"] + "\n" + \
    "Type of Service: " + event["service"] + "\n" "Start Date of Project: " + event["start"] + "\n" + "Company Name: " + event["company"] + "\n" + "Detail: " + event["detail"]
    client.publish(
        TopicArn = os.environ['SNS_TOPIC'],
        Message = strMessage
    )
    return{"code":200}