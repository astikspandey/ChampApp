async function loadEnv() {
  const res = await fetch("env.local");
  const text = await res.text();
  const env = {};
  text.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
  });
  return env;
}
