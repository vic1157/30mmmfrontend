import ScholarshipForm from "@/components/Scholarship-Application/ScholarshipForm";

export default function ScholarshipApplication() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">
        CLEAN Scholarship Application
      </h1>
      <ScholarshipForm />
    </div>
  );
}
