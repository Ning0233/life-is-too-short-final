# functions/main.py
import firebase_admin
from firebase_admin import credentials, firestore, auth
from firebase_functions import https, firestore_fn, auth_fn

# Initialize the Firebase Admin SDK (do this ONCE at the top of your file)
cred = credentials.ApplicationDefault()  # For local development or Cloud Run
# cred = credentials.Certificate("path/to/your/serviceAccountKey.json") # For other environments
firebase_admin.initialize_app(cred)
db = firestore.client()

@https.route()  # HTTP Function
def hello_world(req):
    return "Hello from Python!"

@firestore_fn.document("users/{userId}")  # Firestore Trigger
def on_user_created(event):
    new_user_data = event.data  # Data after the creation
    user_id = event.params["userId"] # Get the userId from the path

    print(f"New user created: {user_id}")
    # Perform actions here (e.g., add user to a mailing list)
    return  # Important: Return None


@auth_fn.user().before_create  # Authentication Trigger
def before_user_creation(user):
    # Modify user properties before creation (e.g., set custom claims)
    user.display_name = "New User" # Set a default display name
    return user

@auth_fn.user().after_create  # Authentication Trigger
def after_user_creation(user):
    # Perform actions after user creation (e.g., send a welcome email)
    print(f"User created: {user.uid}")
    return

# Example of a scheduled function (runs daily at midnight UTC)
@https.schedule(schedule="0 0 * * *")
def scheduled_function(event):
    print("This function runs daily at midnight UTC")
    return