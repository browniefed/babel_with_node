import axios from "axios";

async function loadData(username) {
  
  console.log("Loading data...");
  const { data } = await axios(`https://api.github.com/users/${username}`);

  console.log(`Data loaded for ${data.name} from ${data.location}`);
  
  return data;
}

loadData("browniefed");
