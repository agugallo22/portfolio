import React from 'react';

const ContactInfo = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex items-start gap-4 p-6 card">
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="text-purple-600" size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfo;