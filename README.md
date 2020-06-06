# myfirst-project
-- Primeiro rodar container
sudo docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
Acesse localhost:9000

-- Start server
npm run dev


