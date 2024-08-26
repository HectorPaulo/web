import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css';

const DashboardPage = () => {
  const [step, setStep] = useState(1);
  const [selectedBeach, setSelectedBeach] = useState('');
  const [rating, setRating] = useState(0);
  const [visitDate, setVisitDate] = useState(new Date().toISOString().split('T')[0]);
  const [comment, setComment] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [beaches, setBeaches] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setVisitDate(today);
  }, []);
  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const response = await axios.get('http://localhost:3001/beaches');
        setBeaches(response.data);
      } catch (error) {
        console.error('Error al encontrar las playas:', error);
      }
    };

    fetchBeaches();
  }, []);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('Datos de la calificación a enviar:', {
      nombrePlaya: selectedBeach,
      calificacion: rating,
      fechaVisita: visitDate,
      comentarios: comment,
      inscrito: subscribe
    });
  
    try {
      const response = await axios.post('http://localhost:3001/calificacion', {
        nombrePlaya: selectedBeach,
        calificacion: rating,
        fechaVisita: visitDate,
        comentarios: comment,
        inscrito: subscribe
      });
  
      if (response.status === 200 && visitDate !== '') {
        alert('Evaluación enviada exitosamente');
        setSelectedBeach('');
        setRating(0);
        setVisitDate('');
        setComment('');
        setSubscribe(false);
        setStep(1);
      } else {
        alert('Error al enviar la evaluación');
      }
    } catch (error) {
      console.error('Error al enviar la evaluación:', error);
      alert('Error al enviar la evaluación');
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  const selectedBeachData = beaches.find(beach => beach.nombre === selectedBeach);

  return (
    <div className="dashboard-container">
      <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      <div className="form-container">
        {step === 1 && (
          <>
            <h2>Selecciona una Playa</h2>
            <select
              value={selectedBeach}
              onChange={(e) => setSelectedBeach(e.target.value)}
            >
              <option value=""></option>
              {beaches.map((beach, index) => (
                <option key={index} value={beach.nombre}>
                  {beach.nombre}
                </option>
              ))}
            </select>
            {selectedBeach && selectedBeachData && (
              <div>
                <p>{selectedBeachData.info}</p>
                <img src={selectedBeachData.img} alt={selectedBeachData.nombre} className="beach-image" />
                <button className="rightButton" onClick={handleNextStep}>Siguiente</button>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h2>Califica la Playa</h2>
            <label htmlFor="rating">Calificación (del 0 al 10)</label>
            <input
              type="range"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="10"
            />
            <output htmlFor="rating">{rating}</output>
            <label htmlFor="visitDate">Fecha de visita</label>
            <input
              type="date"
              id="visitDate"
              value= {visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              min="1950-01-01"
            />
            <label htmlFor="comment">Comentario</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="checkbox-container">
              <label htmlFor="subscribe">¿Deseas inscribirte al boletín de la playa?</label>
              <input
                type="checkbox"
                id="subscribe"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
              />
            </div>
            <button onClick={handlePrevStep} className="back-button">Atrás</button>
            <button onClick={handleSubmit}>Aceptar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
