import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'

export const useFetchPublicData = () => {
    const dispatch = useDispatch()
    const { slowRefresh } = useRefresh()
    useEffect(() => {
    //   dispatch(fetchFarmsPublicDataAsync())
      // dispatch(fetchPoolsPublicDataAsync())
    }, [dispatch, slowRefresh])
  }