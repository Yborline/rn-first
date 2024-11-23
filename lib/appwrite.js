import { Client, Account, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.none.first",
  projectId: "67378a1e0035f8d95183",
  databaseId: "67378c3a0037374187fb",
  userCollection: "67378c86001538878bb4",
  publicationsCollection: "67378cc60011176156c6",
  storageId: "673790dc0013fed00ab9",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account
    .create(ID.unique(), "jane.doe@example.com", "12345678Q", "Jane Doe")
    .then(
      function (response) {
        console.log("User created successfully:", response);
      },
      function (error) {
        console.error("Error creating user:", error);
      }
    );
};
