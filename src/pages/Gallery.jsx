import React, { useState, useEffect } from 'react'
import { Images, X } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionWrapper from '../components/common/SectionWrapper.jsx'

// IMPORTANT: This is the backend URL WITHOUT /api at the end
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/gallery`)
      const data = await response.json()
      console.log('Gallery data:', data)
      setGalleryData(data.data || [])
    } catch (error) {
      console.error('Error fetching gallery:', error)
      setGalleryData([])
    } finally {
      setLoading(false)
    }
  }

  const getFullImageUrl = (url) => {
    if (!url) return ''
    // If already absolute URL, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }
    // Otherwise prepend backend URL
    return `${BACKEND_URL}${url}`
  }

  const openLightbox = (eventIndex, imageIndex) => {
    const event = galleryData[eventIndex]
    if (event && event.images && event.images[imageIndex]) {
      setActiveImage({
        event,
        imageIndex,
        images: event.images
      })
    }
  }

  const closeLightbox = () => {
    setActiveImage(null)
  }

  const navigateImage = (direction) => {
    if (!activeImage) return
    const newIndex = activeImage.imageIndex + direction
    if (newIndex >= 0 && newIndex < activeImage.images.length) {
      setActiveImage({
        ...activeImage,
        imageIndex: newIndex
      })
    }
  }

  if (loading) {
    return (
      <div>
        <PageHeader title="Gallery" subtitle="Moments from campus life" icon={<Images size={18} />} />
        <section className="section-padding">
          <div className="container-custom flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-maroon-600 border-t-transparent"></div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Moments from campus life" icon={<Images size={18} />} />

      <section className="section-padding">
        <div className="container-custom">
          {galleryData.length === 0 ? (
            <div className="text-center py-12">
              <Images size={48} className="mx-auto text-gray-300" />
              <p className="text-gray-500 mt-4">No gallery images available.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {galleryData.map((event, eventIndex) => (
                <div key={event._id}>
                  <div className="mb-4">
                    <h2 className="font-serif text-2xl font-bold text-maroon-900">{event.eventName}</h2>
                    {event.description && (
                      <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                    )}
                    {event.date && (
                      <p className="text-gray-400 text-xs mt-1">
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {event.images?.map((img, imgIndex) => {
                      const imageUrl = getFullImageUrl(img.url)
                      console.log('Image URL:', imageUrl) // Check console to see the URL
                      return (
                        <button
                          key={imgIndex}
                          onClick={() => openLightbox(eventIndex, imgIndex)}
                          className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
                        >
                          <img
                            src={imageUrl}
                            alt={img.caption || event.eventName}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              console.error('Failed to load image:', imageUrl)
                              e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                            <span className="text-white text-sm font-medium truncate">
                              {img.caption || event.eventName}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFullImageUrl(activeImage.images[activeImage.imageIndex].url)}
              alt={activeImage.event.eventName}
              className="w-full max-h-[85vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'
              }}
            />
            
            <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {activeImage.imageIndex + 1} / {activeImage.images.length}
            </div>

            {activeImage.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage(-1)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage(1)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery