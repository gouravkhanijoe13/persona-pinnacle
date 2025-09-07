import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Save, Settings, User, FileText, MessageSquare, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin: React.FC = () => {
  const { user, isAdmin, signOut, loading } = useAuth();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(true);

  const [heroSettings, setHeroSettings] = useState({
    name: '',
    title: '',
    subtitle: '',
    stats: {
      experience: '',
      projects: '',
      clients: '',
      availability: ''
    }
  });

  const [aboutSettings, setAboutSettings] = useState({
    title: '',
    story: '',
    mission: '',
    values: '',
    expertise: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' }
    ]
  });

  const [contactSettings, setContactSettings] = useState({
    title: '',
    subtitle: '',
    methods: [
      { title: '', description: '', action: '', highlight: true },
      { title: '', description: '', action: '', highlight: false }
    ]
  });

  useEffect(() => {
    if (user && isAdmin) {
      loadSettings();
    }
  }, [user, isAdmin]);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .in('section', ['hero', 'about', 'contact']);

      if (error) throw error;

      data.forEach((setting) => {
        switch (setting.section) {
          case 'hero':
            setHeroSettings(setting.content as typeof heroSettings);
            break;
          case 'about':
            setAboutSettings(setting.content as typeof aboutSettings);
            break;
          case 'contact':
            setContactSettings(setting.content as typeof contactSettings);
            break;
        }
      });
    } catch (error) {
      console.error('Error loading settings:', error);
      toast({
        title: "Error",
        description: "Failed to load settings",
        variant: "destructive"
      });
    } finally {
      setLoadingSettings(false);
    }
  };

  const saveSettings = async (section: string, content: any) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          section,
          content,
          updated_by: user?.id
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: `${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully`
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading || loadingSettings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-2">Manage your website content</p>
          </div>
          
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Update the main hero section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-name">Name</Label>
                    <Input
                      id="hero-name"
                      value={heroSettings.name}
                      onChange={(e) => setHeroSettings({ ...heroSettings, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-title">Title</Label>
                    <Input
                      id="hero-title"
                      value={heroSettings.title}
                      onChange={(e) => setHeroSettings({ ...heroSettings, title: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={heroSettings.subtitle}
                    onChange={(e) => setHeroSettings({ ...heroSettings, subtitle: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-experience">Years Experience</Label>
                    <Input
                      id="hero-experience"
                      value={heroSettings.stats.experience}
                      onChange={(e) => setHeroSettings({
                        ...heroSettings,
                        stats: { ...heroSettings.stats, experience: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-projects">Projects</Label>
                    <Input
                      id="hero-projects"
                      value={heroSettings.stats.projects}
                      onChange={(e) => setHeroSettings({
                        ...heroSettings,
                        stats: { ...heroSettings.stats, projects: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-clients">Clients</Label>
                    <Input
                      id="hero-clients"
                      value={heroSettings.stats.clients}
                      onChange={(e) => setHeroSettings({
                        ...heroSettings,
                        stats: { ...heroSettings.stats, clients: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-availability">Availability</Label>
                    <Input
                      id="hero-availability"
                      value={heroSettings.stats.availability}
                      onChange={(e) => setHeroSettings({
                        ...heroSettings,
                        stats: { ...heroSettings.stats, availability: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <Button 
                  onClick={() => saveSettings('hero', heroSettings)}
                  disabled={saving}
                  className="w-full"
                >
                  {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save Hero Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle>About Section</CardTitle>
                <CardDescription>Update the about section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="about-title">Title</Label>
                  <Input
                    id="about-title"
                    value={aboutSettings.title}
                    onChange={(e) => setAboutSettings({ ...aboutSettings, title: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="about-story">Story</Label>
                  <Textarea
                    id="about-story"
                    value={aboutSettings.story}
                    onChange={(e) => setAboutSettings({ ...aboutSettings, story: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="about-mission">Mission</Label>
                    <Textarea
                      id="about-mission"
                      value={aboutSettings.mission}
                      onChange={(e) => setAboutSettings({ ...aboutSettings, mission: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="about-values">Values</Label>
                    <Textarea
                      id="about-values"
                      value={aboutSettings.values}
                      onChange={(e) => setAboutSettings({ ...aboutSettings, values: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Expertise Areas</Label>
                  {aboutSettings.expertise.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-2">
                      <Input
                        placeholder="Title"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...aboutSettings.expertise];
                          updated[index].title = e.target.value;
                          setAboutSettings({ ...aboutSettings, expertise: updated });
                        }}
                      />
                      <Textarea
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => {
                          const updated = [...aboutSettings.expertise];
                          updated[index].description = e.target.value;
                          setAboutSettings({ ...aboutSettings, expertise: updated });
                        }}
                        rows={2}
                      />
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => saveSettings('about', aboutSettings)}
                  disabled={saving}
                  className="w-full"
                >
                  {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save About Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle>Contact Section</CardTitle>
                <CardDescription>Update the contact section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-title">Title</Label>
                    <Input
                      id="contact-title"
                      value={contactSettings.title}
                      onChange={(e) => setContactSettings({ ...contactSettings, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subtitle">Subtitle</Label>
                    <Input
                      id="contact-subtitle"
                      value={contactSettings.subtitle}
                      onChange={(e) => setContactSettings({ ...contactSettings, subtitle: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Contact Methods</Label>
                  {contactSettings.methods.map((method, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-2">
                      <Input
                        placeholder="Title"
                        value={method.title}
                        onChange={(e) => {
                          const updated = [...contactSettings.methods];
                          updated[index].title = e.target.value;
                          setContactSettings({ ...contactSettings, methods: updated });
                        }}
                      />
                      <Textarea
                        placeholder="Description"
                        value={method.description}
                        onChange={(e) => {
                          const updated = [...contactSettings.methods];
                          updated[index].description = e.target.value;
                          setContactSettings({ ...contactSettings, methods: updated });
                        }}
                        rows={2}
                      />
                      <Input
                        placeholder="Action Text"
                        value={method.action}
                        onChange={(e) => {
                          const updated = [...contactSettings.methods];
                          updated[index].action = e.target.value;
                          setContactSettings({ ...contactSettings, methods: updated });
                        }}
                      />
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => saveSettings('contact', contactSettings)}
                  disabled={saving}
                  className="w-full"
                >
                  {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save Contact Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your admin profile</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert>
                  <Settings className="h-4 w-4" />
                  <AlertDescription>
                    You are signed in as an administrator. You have full access to edit all website content.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;