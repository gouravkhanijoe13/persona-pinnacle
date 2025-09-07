import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SiteSettings {
  [key: string]: any;
}

export const useSiteSettings = (section: string) => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('content')
          .eq('section', section)
          .single();

        if (error) throw error;

        setSettings(data?.content as SiteSettings || null);
      } catch (err) {
        console.error(`Error fetching ${section} settings:`, err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel(`settings_${section}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'site_settings',
          filter: `section=eq.${section}`
        },
        (payload) => {
          if (payload.eventType === 'UPDATE' && payload.new) {
            setSettings(payload.new.content as SiteSettings);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [section]);

  return { settings, loading, error };
};