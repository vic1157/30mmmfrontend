"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSections = [
  "Personal Information",
  "Family and Relationship Status",
  "Spiritual Journey and Family Background",
  "Church Engagement",
  "Background and Interests",
  "Program Expectations and Needs",
  "Additional Information",
];

export default function ScholarshipForm() {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (step < formSections.length - 1) {
      setStep(step + 1);
    } else {
      console.log(data);
      // Here you would typically send the data to your backend
      setStep(step + 1); // Move to confirmation page
    }
  };

  const renderFormSection = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className="mb-4 text-2xl font-bold">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" {...register("phone", { required: true })} />
                {errors.phone && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <Label htmlFor="location">City and State of Residence</Label>
                <Input
                  id="location"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  {...register("age", { required: true, min: 18 })}
                />
                {errors.age && (
                  <span className="text-red-500">
                    You must be at least 18 years old
                  </span>
                )}
              </div>
              <div>
                <Label>Gender</Label>
                <RadioGroup defaultValue="male">
                  {[
                    "Male",
                    "Female",
                    "Non-Binary",
                    "Prefer not to say",
                    "Other",
                  ].map((option) => (
                    <div className="flex items-center space-x-2" key={option}>
                      <RadioGroupItem
                        value={option.toLowerCase()}
                        id={`gender-${option.toLowerCase()}`}
                      />
                      <Label htmlFor={`gender-${option.toLowerCase()}`}>
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              {/* Add more fields for race/ethnicity, sexual orientation, household income, etc. */}
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="mb-4 text-2xl font-bold">
              Family and Relationship Status
            </h2>
            <div className="space-y-4">
              <div>
                <Label>What is your current relationship status?</Label>
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Single", "Married", "Divorced", "Widowed", "Other"].map(
                      (option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
              {/* Add more fields for marriage date, number of marriages, children, etc. */}
            </div>
          </>
        );
      // ... Add cases for other sections ...
      case 6:
        return (
          <>
            <h2 className="mb-4 text-2xl font-bold">Additional Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="additionalInfo">
                  Is there anything else you&apos;d like us to know about you?
                </Label>
                <Textarea id="additionalInfo" {...register("additionalInfo")} />
              </div>
            </div>
          </>
        );
      default:
        return (
          <h2 className="mb-4 text-2xl font-bold">
            Thank you for your application!
          </h2>
        );
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-8">
          {formSections.map((section, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${index <= step ? "bg-primary-red" : "bg-gray-300"}`}
            />
          ))}
        </div>
        <div className="text-sm font-medium text-center">
          {step < formSections.length
            ? `Step ${step + 1} of ${formSections.length}`
            : "Application Complete"}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormSection()}
        <div className="flex justify-between mt-8">
          {step > 0 && step < formSections.length && (
            <Button type="button" onClick={() => setStep(step - 1)}>
              Previous
            </Button>
          )}
          {step < formSections.length && (
            <Button type="submit">
              {step === formSections.length - 1 ? "Submit" : "Next"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
