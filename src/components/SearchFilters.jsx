export default function SearchFilters({ filters, setFilters, makes, bodyTypes }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }));

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by model..."
        value={filters.search}
        onChange={(e) => update("search", e.target.value)}
        aria-label="Search by model"
      />
      <select value={filters.make} onChange={(e) => update("make", e.target.value)} aria-label="Filter by make">
        <option value="">All Makes</option>
        {makes.map((m) => <option key={m} value={m}>{m}</option>)}
      </select>
      <select value={filters.bodyType} onChange={(e) => update("bodyType", e.target.value)} aria-label="Filter by body type">
        <option value="">All Body Types</option>
        {bodyTypes.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>
      <input
        type="number"
        placeholder="Max price"
        value={filters.maxPrice}
        onChange={(e) => update("maxPrice", e.target.value)}
        aria-label="Max price"
      />
      <select value={filters.sort} onChange={(e) => update("sort", e.target.value)} aria-label="Sort results">
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="year_asc">Year: Oldest First</option>
        <option value="year_desc">Year: Newest First</option>
      </select>
    </div>
  );
}