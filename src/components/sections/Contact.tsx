import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'פנייה מהאתר',
        message: formData.message,
        to_email: EMAILJS_CONFIG.toEmail,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'טלפון',
      details: ['04-6378963'],
    },
    {
      icon: MapPin,
      title: 'כתובת',
      details: ['סלמאן אל-פארסי', 'טמרה, ישראל'],
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: ['ראשון - חמישי: 8:00 - 17:00'],
    },
  ];

  return (
    <section className="py-20 bg-white" dir="rtl" lang="he">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">צור קשר</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }} />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            נשמח לענות על כל שאלה או לתת הצעת מחיר לפרויקט שלך
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                    style={{ backgroundColor: '#FF8C00' }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-black mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl text-black mb-6">שלח לנו הודעה</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="שם מלא *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-right"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="דואר אלקטרוני *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-right"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="טלפון *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-right"
                />
              </div>
              <div>
                <Input
                  placeholder="נושא"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="text-right"
                />
              </div>
              <div>
                <Textarea
                  placeholder="הודעה *"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-right"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full text-white hover:opacity-90"
                style={{ backgroundColor: '#FF8C00' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                  ✅ תודה על פניתך! ניצור איתך קשר בהקדם.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                  ❌ שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר בטלפון.
                </div>
              )}
            </form>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl text-black mb-6">מיקום</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.123456789!2d35.178939!3d32.851469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUxJzA1LjMiTiAzNcKwMTAnNDQuMiJF!5e0!3m2!1sen!2sil!4v1234567890123!5m2!1sen!2sil"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ערמוש האני - מיקום החברה"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-2">סלמאן אל-פארסי, טמרה</p>
              <a
                href="https://waze.com/ul?ll=32.851469,35.178939&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                פתח ב-Waze
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a
                href="https://maps.google.com/?q=32.851469,35.178939"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                פתח ב-Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
