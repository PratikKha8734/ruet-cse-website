import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import QuickAccess from '../components/home/QuickAccess';
import OverviewSection from '../components/home/OverviewSection';
import NoticePreview from '../components/home/NoticePreview';
import EventSection from '../components/home/EventSection';
import { fetchCollection } from '../services/api';

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [noticeData, eventData] = await Promise.all([fetchCollection('/notices'), fetchCollection('/events')]);
        setNotices(noticeData.data || []);
        setEvents(eventData.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <Hero />
      <QuickAccess />
      <OverviewSection />
      <NoticePreview notices={notices} loading={loading} />
      <EventSection events={events} loading={loading} />
    </MainLayout>
  );
}
