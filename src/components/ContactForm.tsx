import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/mgvldblr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-luxury p-8 max-w-md w-full">
      <h3 className="text-2xl font-display font-semibold mb-6 text-gradient">
        Send Me a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
            Your Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="bg-background/50 border-border focus:border-primary/50"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium mb-2 block">
            Your Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-background/50 border-border focus:border-primary/50"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="text-sm font-medium mb-2 block">
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            className="bg-background/50 border-border focus:border-primary/50 resize-none"
            placeholder="Tell me about your goals and how I can help you..."
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-hero w-full"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;