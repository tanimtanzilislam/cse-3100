import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Peterbald' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(availableCats);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilterChange = (e) => {
    setSelectedBreed(e.target.value);
    applyFilters(e.target.value, searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    applyFilters(selectedBreed, e.target.value);
  };

  const applyFilters = (breed, term) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = cats.filter(
      (cat) =>
        (breed === '' || cat.breed === breed) &&
        (term === '' || cat.name.toLowerCase().includes(lowerCaseTerm))
    );
    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <div className="filters mb-4">
        <label htmlFor="breedFilter" className="me-2">
          Filter by Breed:
        </label>
        <select
          id="breedFilter"
          onChange={handleFilterChange}
          value={selectedBreed}
          className="me-3"
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Bengal">Bengal</option>
          <option value="Persian">Persian</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Siamese">Siamese</option>
        </select>
        <label htmlFor="nameSearch" className="me-2">
          Search by Name:
        </label>
        <input
          id="nameSearch"
          type="text"
          placeholder="Enter cat name"
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </div>
      <div className="mt-2 row g-4" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">
                  Age: {cat.age} | Breed: {cat.breed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
