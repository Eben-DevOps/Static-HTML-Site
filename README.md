# Deploying a Static Website on Nginx with Azure Linux Server

This guide will walk you through deploying a static website using Nginx on an Azure Linux server.

## Prerequisites

Before you begin, ensure you have the following:

- An Azure account with sufficient permissions to create and manage resources.
- Basic familiarity with Azure Portal and Linux command line.

## Step 1: Create an Azure Linux Virtual Machine

1. **Sign in to Azure Portal:**
   - Navigate to [portal.azure.com](https://portal.azure.com).
   - Enter your credentials and sign in.

2. **Create a Virtual Machine:**
   - Click on **Create a resource** > **Compute** > **Virtual Machine**.
   - Fill out the necessary details (e.g., name, region, size).
   - Choose a Linux distribution (e.g., Ubuntu) and configure other settings depending on your requirements.
   - Click **Review + create** and then **Create**.

3. **SSH into your Virtual Machine:**
   - Once the VM is created, navigate to it in the Azure Portal.
   - Click on **Connect** and follow the instructions to SSH into your VM.

## Step 2: Install Nginx

1. **Update Package Index:**
   ```bash
   sudo apt-get update
   sudo systemctl start nginx

2. **Verify Nginx Installation:**
   -You can just open a web browser and enter your VM's public IP address.
   -You should see the default Nginx welcome page indicating a successful installation.

## Step 3: Deploy Your Static Website
Transfer Your Website Files:

   -Transfer your static website files (HTML, CSS, JS, images) to the Nginx web root directory.
   -By default, the web root is /var/www/html/.
   -You can do this by navigation to the web root folder using 
      ```bash
      cd /var/www/html


Configure Nginx:

Create a new configuration file for your website (e.g., sudo nano /etc/nginx/sites-available/example.com).
