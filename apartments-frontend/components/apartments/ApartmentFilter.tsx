export default function ApartmentFilters({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}) {
  //render filter inputs
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Search by name/number/project"
              value={filters.search}
              onChange={(e) => setFilters((f: typeof filters) => ({ ...f, search: e.target.value }))}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="City"
              value={filters.city}
              onChange={(e) => setFilters((f: typeof filters) => ({ ...f, city: e.target.value }))}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => setFilters((f: typeof filters) => ({ ...f, minPrice: e.target.value }))}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => setFilters((f: typeof filters) => ({ ...f, maxPrice: e.target.value }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
