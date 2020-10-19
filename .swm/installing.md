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
