"use client";
import React, { useEffect, useState } from "react";
import { Gauge, Info, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "../ui/Modal";

interface Athlete {
  Bib: number;
  Contest: string;
  Pos: number;
  Name: string;
  Gender: string;
  AgeGroup: string;
  Flag: string;
  Salvador: string;
  China: string;
  Rio: string;
  Lisboa: string;
  Total: string;
  Discards: string;
  Final: string;
}

const RankingSection: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch(
          "https://api.raceresult.com/371805/AOGOXB8CKCWGHNE3BLXF2H00YR8YQ330",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rankings");
        }
        const data = await response.json();
        // Filter only women athletes (Gender === 'F')

        setAthletes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  const athleteFilter = (gender: string, distance: string) => {
    return athletes.filter(
      (athlete: Athlete) =>
        athlete.Gender === gender && athlete.Contest === distance,
    );
  };

  const renderFlag = (flagString: string) => {
    const match = flagString.match(/\[img:(.*?)\]/);
    if (match && match[1]) {
      return (
        <img
          src={`https://my.raceresult.com${match[1]}`}
          alt="flag"
          className="w-6 h-4 object-cover rounded-sm inline-block"
        />
      );
    }
    return null;
  };

  const renderTable = (athletes: Athlete[]) => {
    return (
      <div className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl mb-12 w-full sm:w-140">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center text-gray-400 flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-triton-red/20 border-t-triton-red rounded-full animate-spin mb-4"></div>
              <p className="font-bold uppercase tracking-widest text-sm">
                Loading Ranking...
              </p>
            </div>
          ) : error ? (
            <div className="p-20 text-center text-red-400">
              <p>Error: {error}</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse ">
              <caption className="p-2 font-bold">
                {athletes[0].Gender} - {athletes[0].Contest}
              </caption>
              <thead>
                <tr className="bg-black/40 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-white/5">
                  <th className="py-5 px-6 w-20 text-center">Pos</th>
                  <th className="py-5 px-6">Athlete</th>
                  <th className="py-5 px-6 text-center text-triton-red">
                    Total Points
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {athletes.slice(0, 3).map((athlete, idx) => (
                  <tr
                    key={athlete.Bib}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-4 px-6 text-center">
                      {athlete.Pos === 1 ? (
                        <div className="w-8 h-8 mx-auto bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center border border-yellow-500/30">
                          <span className="font-black text-sm">1</span>
                        </div>
                      ) : athlete.Pos === 2 ? (
                        <div className="w-8 h-8 mx-auto bg-gray-300/20 text-gray-300 rounded-full flex items-center justify-center border border-gray-300/30">
                          <span className="font-black text-sm">2</span>
                        </div>
                      ) : athlete.Pos === 3 ? (
                        <div className="w-8 h-8 mx-auto bg-amber-700/20 text-amber-600 rounded-full flex items-center justify-center border border-amber-700/30">
                          <span className="font-black text-sm">3</span>
                        </div>
                      ) : (
                        <span className="font-bold text-gray-500">
                          {athlete.Pos}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        {renderFlag(athlete.Flag)}
                        <span className="font-bold text-sm text-white group-hover:text-triton-red transition-colors">
                          {athlete.Name}
                        </span>
                      </div>
                    </td>

                    <td className="py-4 px-2 text-center">
                      <span className="font-black text-sm text-white">
                        {athlete.Final}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        className="font-black text-lg"
                        onClick={() => handleEditClick(athlete)}
                      >
                        <Gauge
                          size={22}
                          className="text-triton-red hover:text-triton-red transition-colors cursor-pointer"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAthelete, setSelectedAthelete] = useState(
    {} as Athlete | null,
  );

  const handleEditClick = (athlete: Athlete) => {
    setSelectedAthelete(athlete);
    setIsModalOpen(true);
  };

  return (
    <section id="ranking" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            Global Ranking
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
            The Best of Triton
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Keep up with the official TRITON World Series standings. The battle
            for the world title is neck-and-neck in every category.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -170 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-wrap justify-around"
        >
          {renderTable(athleteFilter("Women", "Long Distance"))}
          {renderTable(athleteFilter("Men", "Long Distance"))}
          {renderTable(athleteFilter("Women", "Middle Distance"))}
          {renderTable(athleteFilter("Men", "Middle Distance"))}
          {renderTable(athleteFilter("Women", "Sprint Distance"))}
          {renderTable(athleteFilter("Men", "Sprint Distance"))}
        </motion.div>

        <div className="p-6 text-center">
          <Link
            href="/ranking"
            className="m-auto pointer md:w-sm bg-triton-red hover:text-black text-white  hover:bg-white font-black py-4 md:px-10 rounded-none flex items-center justify-center uppercase tracking-widest transition-all duration-300"
          >
            Check The Full Ranking
          </Link>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Performance Details"
      >
        {selectedAthelete ? (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {selectedAthelete.Name}
            </p>
            <p>
              <strong>Contest:</strong> {selectedAthelete.Contest}
            </p>
            <p>
              <strong>Final Points:</strong> {selectedAthelete.Final}
            </p>
            <p>
              <strong>Salvador Points:</strong> {selectedAthelete.Salvador}
            </p>
            <p>
              <strong>China Points:</strong> {selectedAthelete.China}
            </p>
            <p>
              <strong>Rio Points:</strong> {selectedAthelete.Rio}
            </p>
            <p>
              <strong>Lisboa Points:</strong> {selectedAthelete.Lisboa}
            </p>
            <strong>Total Points: </strong>
            <span className="text-triton-red font-bold">
              {selectedAthelete.Total}
            </span>
          </div>
        ) : (
          <p>No athlete selected.</p>
        )}
      </Modal>
    </section>
  );
};

export default RankingSection;
