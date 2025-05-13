import React from 'react';

const IconPreview = () => {
  // Lista wszystkich ikon z unicons.min.css
  const icons = [
    "unicon-document", "unicon-model", "unicon-task-approved", "unicon-touch-interaction",
    "unicon-sub-volume", "unicon-currency", "unicon-gamification", "unicon-document-alt",
    "unicon-document-blank", "unicon-folder", "unicon-user-group", "unicon-image-gallery",
    "unicon-checkbox-checked", "unicon-checkmark", "unicon-email", "unicon-star",
    "unicon-trophy", "unicon-view", "unicon-delete", "unicon-add", "unicon-blog",
    "unicon-bookmark", "unicon-data", "unicon-home", "unicon-idea", "unicon-layers",
    "unicon-location", "unicon-locked", "unicon-phone", "unicon-printer", "unicon-reply",
    "unicon-security", "unicon-settings", "unicon-share", "unicon-shopping-cart",
    "unicon-tag", "unicon-time", "unicon-tools", "unicon-user", "unicon-wallet",
    "unicon-warning", "unicon-wifi", "unicon-zoom-in", "unicon-zoom-out"
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Podgląd ikon Unicons</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
            <i className={`${icon} text-2xl mb-2`}></i>
            <span className="text-sm text-center">{icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconPreview; 