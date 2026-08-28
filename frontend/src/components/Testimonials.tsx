import React, { useState, useEffect } from 'react';
import axios from 'axios';

function resolveBackendUrl(): string {
  return '';
}

interface Feedback {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

function Testimonials() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const fetchFeedbacks = async () => {
    try {
      const backendUrl = resolveBackendUrl();
      const res = await axios.get(backendUrl + '/api/feedback');
      setFeedbacks(res.data);
    } catch (err) {
      console.error('Failed to fetch feedback:', err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backendUrl = resolveBackendUrl();
      await axios.post(backendUrl + '/api/feedback', formData);
      setStatus('success');
      setFormData({ name: '', rating: 5, message: '' });
      fetchFeedbacks();
      setTimeout(() => {
        setShowModal(false);
        setStatus('idle');
      }, 2000);
    } catch (err) {
      console.error('Failed to submit feedback:', err);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      <div className="max-w-[1400px] w-[95%] mx-auto">
        <div className="text-center mb-16 relative">
          <span className="section-eyebrow">Customer Voices</span>
          <h2 className="section-heading">What Our Devotees Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="mt-8 btn-3d text-sm px-6 py-2"
          >
            Leave Your Feedback
          </button>
        </div>

        {feedbacks.length === 0 ? (
          <div className="text-center text-gray-400 py-10">No feedback yet. Be the first to share your experience!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map((f) => (
              <div key={f.id} className="card-premium p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition"></div>
                <div className="flex gap-1 mb-4 text-amber-500 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < f.rating ? '?' : '?'}</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">"{f.message}"</p>
                <div className="font-bold text-maroon uppercase tracking-wide text-sm">{f.name}</div>
                <div className="text-xs text-gray-400 mt-1">{new Date(f.created_at).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-scaleIn">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
            >
              ?
            </button>
            <h3 className="text-2xl font-bold font-serif text-maroon mb-2">Share Your Experience</h3>
            <p className="text-sm text-gray-500 mb-6">Your feedback helps us serve better.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Your Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Rating (1-5)</label>
                <select 
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none"
                >
                  <option value={5}>5 - Excellent</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={3}>3 - Good</option>
                  <option value={2}>2 - Fair</option>
                  <option value={1}>1 - Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Message</label>
                <textarea 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none resize-none"
                  placeholder="How was the puja or consultation?"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-2 btn-3d py-3"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Feedback'}
              </button>
              
              {status === 'success' && <p className="text-green-600 text-sm text-center font-bold mt-2">Thank you! Feedback saved.</p>}
              {status === 'error' && <p className="text-red-600 text-sm text-center font-bold mt-2">Error saving feedback.</p>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;

