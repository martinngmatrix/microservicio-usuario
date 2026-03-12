import { AppConfig } from "./infrastructure/AppConfig";

const PORT = 3000;
const { app } = new AppConfig();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GET  http://localhost:${PORT}/api/users`);
  console.log(`POST http://localhost:${PORT}/api/users`);
});
