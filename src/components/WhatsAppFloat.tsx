import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
    'https://wa.me/971588258315?text=Hi%2C%20I%27m%20interested%20in%20B-Lila%20Fitness%20coaching!';

export default function WhatsAppFloat() {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with B-Lila Fitness on WhatsApp"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.4, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_24px_rgba(34,197,94,0.45)] flex items-center justify-center transition-colors"
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" aria-hidden="true" />
            <MessageCircle size={26} aria-hidden="true" />
        </motion.a>
    );
}
