# 🔧 vknyvz

My personal portfolio website. 

Deployed with Docker and managed via CI/CD.

---

## 🏗️ Architecture

- **Frontend** → [Next.js](https://nextjs.org)  
- **Backend API** → [Node.js](https://nodejs.org)  
- **Deployment** → Docker + GitHub Actions + Nginx (SSL + reverse proxy)

---

## 🌐 Live Applications

- **Portfolio Website** → [https://www.vknyvz.com](https://www.vknyvz.com)  
- **API Endpoint** → [https://api.vknyvz.com](https://api.vknyvz.com)

---

## 💻 Local Development

- **Frontend** → [http://localhost:3002](http://localhost:3002)  
- **API** → [http://localhost:5002](http://localhost:5001)  

---

## 🚀 Usage

```bash
# Build and start services
docker-compose up --build -d

# Stop all services
docker-compose down
