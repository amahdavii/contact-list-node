import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
const contactList = [];

async function addNewContact() {
  const firstName = await rl.question("Enter your firstname: ");
  const lastName = await rl.question("Enter your lastname: ");

  const newContact = {
    id: contactList.length + 1,
    firstName,
    lastName,
  };

  contactList.push(newContact);
}

function showContactList() {
  contactList
    .map(({ id, firstName, lastName }) => {
      return `#${id} ${firstName} ${lastName}`;
    })
    .join("\n");
}
