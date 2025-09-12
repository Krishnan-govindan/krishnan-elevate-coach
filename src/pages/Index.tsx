import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ParticleBackground from '@/components/ParticleBackground';
import ContactForm from '@/components/ContactForm';
import {
  Calendar,
  Target,
  TrendingUp,
  Users,
  Brain,
  Star,
  Play,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mindset Mastery",
      description: "Transform limiting beliefs into empowering thoughts that drive success and personal growth."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Success Strategies", 
      description: "Navigate your professional journey with clarity, confidence and strategic planning."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Confidence Building",
      description: "Develop unshakeable self-confidence and presence in all areas of your life."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Development",
      description: "Cultivate authentic leadership skills that inspire others and drive results."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personal Growth Coaching",
      description: "Unlock your potential and create lasting transformation in all aspects of life."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Early Career Navigation",
      description: "Get expert guidance to accelerate your career and avoid common pitfalls."
    }
  ];

  const videos = [
    {
      id: "fQvde2LuQdI",
      title: "Mindset Transformation Techniques"
    },
    {
      id: "g9zS01iiTXw", 
      title: "Building Confidence & Success"
    },
    {
      id: "fb7Qz-Mn0XE",
      title: "Leadership Development Strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
              <span className="text-primary-foreground font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-gradient">Indian Life Coach</h1>
              <p className="text-muted-foreground text-sm">Krishnan Govindan</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://calendly.com/coachkrishnangovindan/indian-life-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Schedule Session
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium">Software Engineer • Coach • Mentor</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Life - 
              <span className="text-gradient block mt-2">
                Unlock Your True Potential
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Mindset, Growth & Success for High Achievers. Level up your life & career with proven strategies from a software engineer turned elite coach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://calendly.com/coachkrishnangovindan/indian-life-coaching"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero text-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Session
              </a>
              
              <a
                href="https://wa.me/14254424167"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +1 (425) 442-4167
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/nomad_krishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/NomadKrishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@NomadKrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/coachkrishnangovindan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="card-luxury p-4 animate-glow">
              <img
                src="https://storage.googleapis.com/msgsndr/m9jCzEyKqM4xlMWTjcgS/media/685aa9b8f1a848bc1fe8873d.jpeg"
                alt="Krishnan Govindan - Elite Life Coach"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 px-6 py-20 bg-card/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Who is <span className="text-gradient">Krishnan Govindan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From software engineer to elite life coach, I've built myself from scratch and now help high achievers unlock their true potential.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="card-luxury p-2 rounded-2xl">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/f4KJi4NTTmA"
                  title="Introduction - Krishnan Govindan"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-luxury p-8">
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient">
                  My Transformation Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a software engineer turned coach, I understand the unique challenges that ambitious minds face. I've navigated the tech industry, built successful projects, and transformed my own mindset to achieve extraordinary results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Lives Transformed</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Elite <span className="text-gradient">Coaching Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coaching programs designed for high achievers, entrepreneurs, and ambitious professionals ready to level up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:animate-glow transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="relative z-10 px-6 py-20 bg-card/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Watch Latest <span className="text-gradient">Coaching Videos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a taste of my coaching approach with these powerful transformation strategies and insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="card-luxury group hover:scale-105 transition-all duration-500">
                <div className="p-4">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-0 transition-all duration-300" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-gradient transition-all duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Transform Your Life?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards unlocking your potential. Schedule a session or send me a message to begin your transformation journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="card-luxury p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-6 animate-glow" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient">
                  Schedule a Coaching Session
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book a personalized 1-on-1 coaching session to discuss your goals and create a transformation plan.
                </p>
                <a
                  href="https://calendly.com/coachkrishnangovindan/indian-life-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Now on Calendly
                </a>
              </div>
              
              <div className="card-luxury p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-gradient">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:support@indianlifecoaches.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">@</span>
                    </div>
                    <span>support@indianlifecoaches.com</span>
                  </a>
                  
                  <a
                    href="https://wa.me/14254424167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span>+1 (425) 442-4167</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-card/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">K</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gradient">Indian Life Coach</h3>
                  <p className="text-muted-foreground text-sm">Krishnan Govindan</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering high achievers to unlock their true potential through mindset mastery and strategic growth.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Personal Growth Coaching</li>
                <li>Mindset Mastery Programs</li>
                <li>Career Success Strategies</li>
                <li>Leadership Development</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nomad_krishnan/" className="text-muted-foreground hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/NomadKrishnan/" className="text-muted-foreground hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@NomadKrishnan" className="text-muted-foreground hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/coachkrishnangovindan/" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Indian Life Coach. All rights reserved. | Krishnan Govindan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;