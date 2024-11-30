import { Client, Account, ID, Databases, Query } from "react-native-appwrite";
import { User } from "../interfaces/user";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.none.first",
  projectId: "67378a1e0035f8d95183",
  databaseId: "67378c3a0037374187fb",
  userCollectionId: "67378c86001538878bb4",
  publicationsCollection: "67378cc60011176156c6",
  storageId: "673790dc0013fed00ab9",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string,
  avatar: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    await account.updatePrefs({
      avatar: avatar, // Добавляем аватар
    });
    if (!newAccount) throw Error;
    await signIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar,
      }
    );
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Используем сообщение ошибки
    } else {
      throw new Error(String(error)); // Для других типов преобразуем в строку
    }
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await account.deleteSessions();
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Используем сообщение ошибки
    } else {
      throw new Error(String(error)); // Для других типов преобразуем в строку
    }
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0] as User;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Используем сообщение ошибки
    } else {
      throw new Error(String(error)); // Для других типов преобразуем в строку
    }
  }
};
