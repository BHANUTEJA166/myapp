import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../../Redux/Iphones/IphoneActions';
import useCallApi from './CallApi';

const Welcome = ({ stocks, loading, error, fetchStocks }) => {
  const Features     = useCallApi('Features');
  const Accessories  = useCallApi('Accessories');
  const Reviews      = useCallApi('Reviews');
  const enquiries    = useCallApi('enquiries');

  useEffect(() => { fetchStocks(); }, [fetchStocks]);

  const totalStock = stocks.reduce((sum, item) => sum + item.stock, 0);

  return (
    <div className="h-100 p-5 text-center">
      <h1 className="mb-5">Welcome to Admin Dashboard</h1>
      <div className="row g-4">
        <StockCard count={Accessories.length} title="Accessories" />
        <StockCard count={Reviews.length} title="Reviews" />
        <StockCard count={enquiries.length} title="Enquiries" />
        <StockCard count={totalStock}  title="Total iPhones" />
      </div>
      {!loading && !error &&
        <div className="row mt-5">
          {stocks.map(item => {
            const statusClass = item.stock === 0 ? 'text-danger' : item.stock <= 5 ? 'text-warning' : 'text-success';
            return (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5>{item.name}</h5>
                    <h2 className={statusClass}>{item.stock}</h2>
                    <p>{item.stock === 0 ? 'Out of Stock' : item.stock <= 5 ? 'Low Stock' : 'In Stock'}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }
      {loading && <p>Loading stocks…</p>}
      {error   && <p className="text-danger">Error: {error}</p>}
    </div>
  );
};

const StockCard = ({ count, title }) => (
  <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{count}+</h1>
        <h5>{title}</h5>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  stocks: state.iphones.stocks,
  loading: state.iphones.loading,
  error: state.iphones.error
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
