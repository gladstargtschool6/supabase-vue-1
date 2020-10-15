## 0. Setup Swimm 
- For a 5 minute quick start with gif examples see the [Swimm Install Manual](https://docs.swimm.io/en/articles/4355463-installation) Or follow these steps:

Step 1: Download Swimm 
- Start by downloading the package for your operating system.

Step 2: Run Swimm 
- If after downloading the package you will run into a permissions issue, grant access in your System Preferences > Security and Privacy to continue and open the app.
Go to Systems Preferences > Security & Privacy and allow your machine to open the Swimm app. 
- Click in the button to 'Open Anyway' and again click 'Open' in the pop up.
- Done. This will allow the app to be opened, and you will be directed to the sign in page.
- For Windows - After downloading the package you will run into a permissions issue that will prevent you from opening the app, so  choose More Info and Run Anyway:
- Now you can continue the installation process, and in the end - launch Swimm from the icon created on your desktop or via the Start menu.

Step 3: Open the App & Create your Account
- Check your email for our beta password, later on you will be able to choose your own password. `If the app doesn't open automatically, double click on it and create your account. 
- The Swimm app interface works in your local server in the browser and will open in a new Tab.
- To learn more about how Swimm works before initializing it, check Swimm in your Repo and Git.

Next Steps
- Join a Team, if you’d like to join an existing repository already added by a team member. 
- Initialize a New Repo if you are the first Swimm Champion setting up this new repo for your collaborators or team.
- Swimm is currently piloting with a select number of Beta users. Go to this page and shoot us an e-mail so we can include you in our beta batch.
- Let's go over the steps to make sure our project is configured properly:
- If you used `swimm install` you can jump to step 2. 🎉

<br>

## 1. Installing the dependencies 

  - Run `npm install` in the root folder
  - Create an empty `.env` file to store your URL and API Key under the root folder.

## 2. Creating a Supabase project
  - Register on [Supabase](https://supabase.io/)
  - Create a project (and an organization)

## 3. Creating the DB table
  - In Supabase menu Go to >Editor

  ![image.png](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2F0jBGcP2zqusX3mGqQgeK%2Fimg%2Fa604a77f-615a-4300-8291-776f4f037928.png?alt=media&token=2e7b32f9-85e9-490e-acd0-0def53a951a2)
  
  - Replace the existing code in the editor with the following lines in order to
  - Create 2 new tables in the supabase editor:
    `
    CREATE TABLE lists (
      uuid text,
      id bigserial PRIMARY KEY,
      inserted_at timestamp without time zone DEFAULT timezone('utc' :: text, now()) NOT NULL,
      updated_at timestamp without time zone DEFAULT timezone('utc' :: text, now()) NOT NULL
    );
    `
    `
    CREATE TABLE tasks (
      task_text text NOT NULL,
      complete boolean DEFAULT false,
      id bigserial PRIMARY KEY,
      list_id bigint REFERENCES lists NOT NULL,
      inserted_at timestamp without time zone DEFAULT timezone('utc' :: text, now()) NOT NULL,
      updated_at timestamp without time zone DEFAULT timezone('utc' :: text, now()) NOT NULL
    );
    `


## 4. Getting the API key and URL
  - Go to >API >authentication

  ![image.png](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2F0jBGcP2zqusX3mGqQgeK%2Fimg%2Fce7d31c2-8148-4587-97b5-79c0305a99f1.png?alt=media&token=84d2b58c-d98a-41d2-bb50-670526f3fab2)

  - Copy the API key and URL to your `.env` file
  - Add the following lines to the `.env` file:
  
    `
    VUE_APP_SUPABASE_URL<Your URL>
    `

    `
    VUE_APP_SUPABASE_KEY=<Your KEY>
    `


## 5. Run the project locally
- Run `npm run serve` and make sure everything is working fine, adding lists and tasks and marking them done
