import { AppConfig } from "./infrastructure/config/AppConfig";

const PORT = 3000;
const { app } = new AppConfig();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});