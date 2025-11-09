const StatsBar = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Practices Served" },
    { value: "98%", label: "Client Retention" },
    { value: "18%", label: "Avg Revenue Increase" }
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
