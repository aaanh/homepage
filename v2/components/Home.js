export default function HomeContent() {
  let d = new Date();

  return (
    <div className="sm:text-md text-sm font-normal my-4">
      <div id="welcome" className="mt-4">
        <h2 className="text-green-600 font-bold">
          {"Welcome to Anh's Portfolio 6.90 RC (Yeetus Magus)"}
        </h2>
      </div>
      <div id="motd" className="my-2 [&>*]:mt-2">
        <p className="break-all">
          * <span className="text-cyan-500">Documentation:</span>{" "}
          <a href="https://github.com/aaanh/homepage">
            https://github.com/aaanh/homepage.git
          </a>
        </p>
        <p>
          * <span className="text-cyan-500">Status:</span> 📚 🎓 and
          👀 internships.
        </p>
        <p>
          * <span className="text-cyan-500">Alma mater:</span>{" "}
          Concordia University, Montreal, QC. Canada
        </p>
        <p>
          * <span className="text-cyan-500">Specializations:</span>{" "}
          Software Development, DevOps/SRE, Systems Administration in
          Windows and Linux.
        </p>

        <p>
          <span className="text-yellow-600 dark:text-yellow-400">
            Domains:
          </span>{" "}
          {"hoanganh.{dev, tech}; aaanh.{app, ca, com}"}
        </p>
        <p className="text-slate-500">Last login: {d.toString()}</p>
      </div>
    </div>
  );
}