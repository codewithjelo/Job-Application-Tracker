import { useState } from "react";
import Swal from "sweetalert2";
import { useApplications } from "../hooks/useApplications";

const ApplicationAddForm = () => {
  const { addApplication } = useApplications();

  // State to hold form data
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
    appliedDate: "",
    interviewDate: "",
    work: "On-Site",
    type: "Full-time",
    location: "",
    notes: "",
  });

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.company || !formData.position || !formData.appliedDate) {
      Swal.fire({
        title: "Missing Fields",
        text: "Please fill in Company, Position, and Apply Date",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Confirm before submitting
    const result = await Swal.fire({
      title: "Add Application?",
      text: "Do you want to add this job application?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add it",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        // Prepare data for API
        const newApplication = {
          company: formData.company,
          position: formData.position,
          status: formData.status,
          appliedDate: formData.appliedDate
            ? new Date(formData.appliedDate).toISOString()
            : new Date().toISOString(),
          interviewDate: null,
          rejectedDate: null,
          location: formData.location,
          work: formData.work,
          type: formData.type,
          notes: formData.notes,
          activities: [
            {
              id: 1,
              type: "created",
              timestamp: new Date().toISOString(),
              note: "Application submitted",
            },
          ],
        };

        // Call the hook function
        await addApplication(newApplication);

        // Show success message
        await Swal.fire({
          title: "Success!",
          text: "Application added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          company: "",
          position: "",
          status: "Applied",
          appliedDate: "",
          interviewDate: "",
          work: "On-Site",
          type: "Full-time",
          location: "",
          notes: "",
        });
      } catch (error) {
        console.error("Error adding application:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add application. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="flex flex-col rounded-md border border-[var(--border)] p-3">
      <p className="text-md font-semibold text-gray-700">Add New Application</p>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="e.g., Google"
            required
          />
        </div>

        <div>
          <label className="text-sm">
            Position <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
            placeholder="e.g., Frontend Engineer"
            required
          />
        </div>

        <div>
          <label className="text-sm">
            Apply Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.appliedDate}
            onChange={(e) => handleChange("appliedDate", e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm">Location</label>
          <input
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="e.g., Mountain View, CA or Remote"
          />
        </div>

        <div>
          <label className="text-sm">Work Arrangement</label>
          <select
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.work}
            onChange={(e) => handleChange("work", e.target.value)}
          >
            <option>On-Site</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Type</label>
          <select
            className="w-full rounded border px-2 py-1 text-sm"
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option>Full-time</option>
            <option>Contract</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Notes</label>
          <textarea
            className="w-full rounded border px-2 py-1 text-sm"
            rows={3}
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Add any additional notes..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
        >
          Add Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationAddForm;