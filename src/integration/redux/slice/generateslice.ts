import { createSlice } from "@reduxjs/toolkit";

export interface GenerateStateArticle {
  videoFrom: string;
  description: string;
  speaker: string;
  personaId: string;
  videoDuration: number;
  voiceToneId: string;
  introVideoId: string;
  outroVideoId: string;
}

const initialState: GenerateStateArticle = {
  description: "",
  videoFrom: "article",
  speaker: "",
  personaId: "",
  videoDuration: 2,
  voiceToneId: "66f6a103b5a59e60de1cd7bf",
  introVideoId: "",
  outroVideoId: "",
};

export const generateslice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    addDescription: (state, action) => {
      state.description = action.payload;
    },
    setPersonaId: (state, action) => {
      state.personaId = action.payload;
    },
    setIntroVideoId: (state, action) => {
      state.introVideoId = action.payload;
    },
    setOutroVideoId: (state, action) => {
      state.outroVideoId = action.payload;
    },
    setSpeaker: (state, action) => {
        state.speaker = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addDescription, setPersonaId , setIntroVideoId, setOutroVideoId, setSpeaker} = generateslice.actions;

export default generateslice.reducer;
