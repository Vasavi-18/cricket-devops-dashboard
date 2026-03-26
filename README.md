# 🏏 Cricket DevOps Dashboard: Secure CI/CD Pipeline with Docker on AWS.

> A modern, cloud-deployed cricket dashboard showcasing **real-time match insights** with a fully automated **CI/CD pipeline** using AWS, Docker, and GitHub Actions.

---

## 🚀 Project Overview

Cricket LiveHub is a **DevOps-driven web application** that displays live-style cricket match data through a clean, professional dashboard UI.

This project demonstrates how a simple frontend application can be transformed into a **production-ready deployment pipeline** using modern DevOps practices.

---

## ✨ Key Features

* 📊 Premium dashboard UI with match insights
* 🔄 Simulated real-time data updates
* ⚡ Fully automated CI/CD pipeline
* 🐳 Dockerized application
* ☁️ Deployed on AWS EC2
* 🔐 HTTPS enabled using Let's Encrypt (Certbot)
* 🌐 Custom domain using DuckDNS

---

## 🏗️ Architecture

```
Developer → GitHub → GitHub Actions → EC2 (Docker) → Nginx → Live Website
```

### Flow Explained:

1. Code is pushed to GitHub
2. GitHub Actions triggers pipeline
3. SSH connects to EC2 instance
4. Latest code is pulled
5. Docker image is rebuilt
6. Container is restarted
7. Website updates automatically 🚀

---

## 🧰 Tech Stack

| Category         | Tools Used              |
| ---------------- | ----------------------- |
| Frontend         | HTML, CSS, JavaScript   |
| CI/CD            | GitHub Actions          |
| Containerization | Docker                  |
| Cloud            | AWS EC2                 |
| Web Server       | Nginx                   |
| Domain           | DuckDNS                 |
| SSL              | Certbot (Let's Encrypt) |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/cricket-devops-dashboard.git
cd cricket-devops-dashboard
```

---

### 2️⃣ Build Docker Image

```bash
docker build -t cricket-dashboard .
```

---

### 3️⃣ Run Container

```bash
docker run -d -p 80:80 --name cricket-dashboard cricket-dashboard
```

---

### 4️⃣ Access Application

```
http://<your-ec2-public-ip>
```

---

## 🔁 CI/CD Pipeline (GitHub Actions)

The pipeline is triggered automatically on:

```yaml
on:
  push:
    branches:
      - main
```

### Deployment Steps:

* Checkout code
* SSH into EC2
* Pull latest changes
* Stop old container
* Build new Docker image
* Run updated container

---

## 🔐 Environment Variables (GitHub Secrets)

| Secret Name | Description      |
| ----------- | ---------------- |
| EC2_HOST    | Public IP of EC2 |
| EC2_USER    | Ubuntu           |
| EC2_KEY     | Private SSH key  |

---

## 🌍 Live Demo

🔗 https://cricket-dashboard.duckdns.org

---

## Cricket dashboard

<img width="1836" height="897" alt="cricket dashboard" src="https://github.com/user-attachments/assets/73b251e5-c06b-4eaa-abf8-caae5079e196" />


## ⚡ Challenges Faced

* ❌ Docker permission issues
* ❌ Port conflicts (80 already in use)
* ❌ Nginx misconfiguration
* ❌ SSL certificate errors
* ❌ Git conflicts

### 💡 What I Learned

* Debugging is core to DevOps
* CI/CD failures are part of the process
* Infrastructure matters as much as code
* Small mistakes can break pipelines

---

## 👩‍💻 Author

**Vasavi**

* Passionate about DevOps, Cloud & Cricket 🏏
* Exploring Full Stack + AI Content + Sports Tech

---

## 💙 Acknowledgements

* AWS Free Tier
* GitHub Actions
* Docker
* Let's Encrypt

---

## ⭐ Final Note

This project is not just about cricket.

It’s about understanding how:

> Code → Pipeline → Cloud → Product

becomes a **living system**.

---

✨ If you found this useful, consider giving it a ⭐ on GitHub!
