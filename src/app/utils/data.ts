/* eslint-disable prettier/prettier */
export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Certifications', path: '#projects' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string 
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'AWS Solution Architect',
    repo: 'https://drive.google.com/file/d/1HiSXprJHfGvvTVZBUNGCOKqsx9d7XZ-h/view?usp=sharing',
    url: 'https://www.credly.com/badges/24952c41-9f34-46ae-9d6c-33d0c7a1e6c7/public_url',
    image:
      'https://i.ibb.co/hKM02PN/awsssa.png',
    description:
      'The AWS Solution Architect certifies that i can build secure and robust solutions using architectural design principles based on customer requirements.',
    tags: ['']
  },
  {
    name: 'HashiCorp Terraform',
    repo: 'https://drive.google.com/file/d/1uP_eWJRCJwFLbAUWeAB36BF_H3huVGns/view?usp=sharing',
    url: 'https://www.credly.com/badges/07db8d7c-657d-40c5-bd07-05e1f350e753/public_url',
    image:
      'https://i.ibb.co/whXfNNh/terraformlogo.png',
    description: 'Terraform associate certifies that i can proficiently utilize Terraform for infrastructure automation skills in real-world scenarios to meet critical business objectives.',
    tags: ['']
  },
  {
    name: 'Customer Success Award',
    repo: 'https://github.com/grazziotti/interactive-comments-section',
    // url: 'https://interactive-comments-section-eta.vercel.app/',
    image: 'https://i.ibb.co/q1nCMwH/Omer-Saif-Kazi-Recognition-Townhall.png"',
    description: 'Awarded for my outstanding contribution for reaching customer goals successful.',
    tags: [''],
    url: ""
  }
]

export const skillsData = [
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS'
  },
  {
    img: 'azure/azure-original.svg',
    name: 'Azure'
  },
  {
    img: 'googlecloud/googlecloud-original.svg',
    name: 'Google Cloud'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'kubernetes/kubernetes-original.svg',
    name: 'Kubernetes'
  },
  {
    img: 'terraform/terraform-original.svg',
    name: 'Terraform'
  },
  {
    img: 'ansible/ansible-original.svg',
    name: 'Ansible'
  },
  {
    img: 'jenkins/jenkins-original.svg',
    name: 'Jenkins'
  },
  {
    img: 'githubactions/githubactions-original.svg',
    name: 'GitHub Actions'
  },
  {
    img: 'gitlab/gitlab-original.svg',
    name: 'GitLab'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'bash/bash-original.svg',
    name: 'Bash'
  },
  {
    img: 'sonarqube/sonarqube-plain-wordmark.svg',
    name: 'Sonarqube'
  },
  {
    img: 'prometheus/prometheus-original.svg',
    name: 'Prometheus'
  },
  {
    img: 'grafana/grafana-original.svg',
    name: 'Grafana'
  },
  {
    img: 'kibana/kibana-original.svg',
    name: 'Kibana'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'wordpress/wordpress-original.svg',
    name: 'Wordpress'
  }
]
