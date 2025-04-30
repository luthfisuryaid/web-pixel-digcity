import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventsAPI } from '../services/api';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';

const UpcomingEvents = ({ limit = 3 }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        setLoading(true);
        const response = await eventsAPI.getAll(); // Bisa diganti dengan getUpcoming saat endpoint sudah siap
        
        if (response.data.success) {
          setEvents(response.data.data.slice(0, limit));
        } else {
          throw new Error(response.data.message || 'Gagal memuat event');
        }
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
        setError('Gagal memuat event. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, [limit]);

  // Format tanggal ke format Indonesia
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block w-8 h-8 border-4 border-digcity-orange border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600">Memuat event...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
        <button 
          className="mt-4 text-digcity-blue hover:text-digcity-orange underline"
          onClick={() => window.location.reload()}
        >
          Coba lagi
        </button>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Belum ada event yang akan datang.</p>
      </div>
    );
  }

  return (
    <div className="upcoming-events">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <PixelCard 
            key={event.id} 
            color="orange" 
            hoverable={true} 
            animate={true}
            className="flex flex-col h-full"
          >
            <div className="h-40 bg-gradient-to-r from-digcity-orange to-digcity-yellow mb-4 flex items-center justify-center pixel-border">
              {event.image_url ? (
                <img 
                  src={event.image_url} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'pixelated' }}
                />
              ) : (
                <span className="font-pixel text-white text-2xl">EVENT</span>
              )}
            </div>
            <h3 className="font-pixel text-xl mb-2 text-digcity-orange">{event.title}</h3>
            <p className="text-gray-700 mb-2">
              <span className="inline-block w-4 h-4 bg-digcity-yellow mr-2 pixel-border align-text-bottom"></span>
              {formatDate(event.event_date)}
            </p>
            {event.location && (
              <p className="text-gray-700 mb-4">
                <span className="inline-block w-4 h-4 bg-digcity-blue mr-2 pixel-border align-text-bottom"></span>
                {event.location}
              </p>
            )}
            <p className="text-gray-700 flex-grow">
              {event.description.length > 100 
                ? `${event.description.substring(0, 100)}...` 
                : event.description}
            </p>
            <div className="mt-4">
              <Link to={`/events/${event.id}`}>
                <PixelButton color="yellow" className="w-full">
                  DETAIL EVENT
                </PixelButton>
              </Link>
            </div>
          </PixelCard>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/activities">
          <PixelButton color="blue">
            LIHAT SEMUA EVENT
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
