// \Portfolio\my-portfolio\interface\service_interface.ts

export interface Service {
  title: string;
  description: string;
  tagline: string;
  technologies: string[];
  icon: string;
}

export interface ServicesData {
  heading: string;
  subtitle: string;
  services: Service[];
}
