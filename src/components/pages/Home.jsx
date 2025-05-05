import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HeroImage = ({ image }) => (
  <figure className="w-full h-[19.5rem] border-2 border-[#1E1E1E] rounded-lg shadow-md overflow-hidden">
    <img
      src={image}
      alt="Little Lemon Restaurant"
      className="w-full h-full object-cover"
    />
  </figure>
);

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number().min(1, 'At least 1 guest required').max(10, 'Maximum 10 guests allowed').required('Number of guests is required'),
  occasion: Yup.string()
});

const ReservationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 w-full max-w-md">
        <h2 className="text-2xl font-nunito font-bold mb-6">Reserve A Table</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: 2,
            occasion: 'None'
          }}
          validationSchema={ReservationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
              onClose();
            }, 500);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-inter text-gray-700 mb-1">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  className={`w-full p-2 border rounded-md ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block font-inter text-gray-700 mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className={`w-full p-2 border rounded-md ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className="block font-inter text-gray-700 mb-1">Phone</label>
                <Field
                  type="tel"
                  name="phone"
                  className={`w-full p-2 border rounded-md ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label htmlFor="date" className="block font-inter text-gray-700 mb-1">Date</label>
                  <Field
                    type="date"
                    name="date"
                    className={`w-full p-2 border rounded-md ${errors.date && touched.date ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex-1">
                  <label htmlFor="time" className="block font-inter text-gray-700 mb-1">Time</label>
                  <Field
                    as="select"
                    name="time"
                    className={`w-full p-2 border rounded-md ${errors.time && touched.time ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </Field>
                  <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label htmlFor="guests" className="block font-inter text-gray-700 mb-1">Guests</label>
                  <Field
                    type="number"
                    name="guests"
                    min="1"
                    max="10"
                    className={`w-full p-2 border rounded-md ${errors.guests && touched.guests ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="guests" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex-1">
                  <label htmlFor="occasion" className="block font-inter text-gray-700 mb-1">Occasion</label>
                  <Field
                    as="select"
                    name="occasion"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </Field>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-[#1E1E1E] text-white rounded-md hover:bg-gray-800 transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#F5F5F5] flex flex-col sm:flex-row justify-between items-center p-8 min-h-screen ">
      <section className="max-w-lg">
        <header>
          <h1 className="font-nunito font-bold text-[2.25rem]">Little Lemon</h1>
          <h2 className="font-inter font-normal text-[1.5rem] text-gray-700">Chicago</h2>
        </header>

        <p className="font-inter text-gray-600 mt-4 leading-relaxed">
          We are a family-owned Mediterranean restaurant, focused on traditional recipes
          served with a modern twist.
        </p>

        <button
          className="bg-[#1E1E1E] text-white font-inter font-medium px-6 py-3 rounded-lg mt-4 hover:bg-gray-800 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Reserve A Table
        </button>
      </section>

      <HeroImage image="/cooking.jpg" />

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Home;