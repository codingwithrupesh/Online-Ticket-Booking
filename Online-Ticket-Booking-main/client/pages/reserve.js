export default function Reserve() {
    const [seats, setSeats] = useState(1);

    const handleReserve = async () => {
        const response = await fetch('http://localhost:5000/api/reservations/reserve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, seats }),
        });
        const data = await response.json();
        alert(data.message || data.error);
    };

    return (
        <div>
            <h1>Reserve Seats</h1>
            <input type="number" value={seats} onChange={(e) => setSeats(Number(e.target.value))} min="1" max="7" />
            <button onClick={handleReserve}>Reserve</button>
        </div>
    );
}
